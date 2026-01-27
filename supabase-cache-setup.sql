-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create food parse cache table with embeddings
CREATE TABLE food_parse_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  query_normalized TEXT NOT NULL,
  embedding vector(768),  -- Gemini embedding dimension
  parsed_result JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  hit_count INTEGER DEFAULT 1
);

-- Create index for fast vector similarity search
CREATE INDEX idx_food_cache_embedding ON food_parse_cache
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

-- Create unique index for exact match and upsert
CREATE UNIQUE INDEX idx_food_cache_normalized ON food_parse_cache(query_normalized);

-- Function to search for similar queries
CREATE OR REPLACE FUNCTION search_food_cache(
  query_embedding vector(768),
  similarity_threshold float DEFAULT 0.85,
  max_results int DEFAULT 1
)
RETURNS TABLE (
  id UUID,
  query TEXT,
  parsed_result JSONB,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    fc.id,
    fc.query,
    fc.parsed_result,
    1 - (fc.embedding <=> query_embedding) as similarity
  FROM food_parse_cache fc
  WHERE 1 - (fc.embedding <=> query_embedding) > similarity_threshold
  ORDER BY fc.embedding <=> query_embedding
  LIMIT max_results;
END;
$$;

-- Enable RLS (optional - cache is shared across all users)
-- ALTER TABLE food_parse_cache ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Cache is readable by all" ON food_parse_cache FOR SELECT USING (true);


-- ============================================
-- SAFETY CHECK CACHE TABLE
-- ============================================

-- Create safety check cache table with embeddings
CREATE TABLE IF NOT EXISTS safety_check_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  query_normalized TEXT NOT NULL,
  embedding vector(768),  -- Gemini embedding dimension
  result JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  hit_count INTEGER DEFAULT 1
);

-- Create index for fast vector similarity search
CREATE INDEX IF NOT EXISTS idx_safety_cache_embedding ON safety_check_cache
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

-- Create unique index for exact match and upsert
CREATE UNIQUE INDEX IF NOT EXISTS idx_safety_cache_normalized ON safety_check_cache(query_normalized);

-- Function to search for similar safety queries
CREATE OR REPLACE FUNCTION search_safety_cache(
  query_embedding vector(768),
  similarity_threshold float DEFAULT 0.85,
  max_results int DEFAULT 1
)
RETURNS TABLE (
  id UUID,
  query TEXT,
  result JSONB,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    sc.id,
    sc.query,
    sc.result,
    1 - (sc.embedding <=> query_embedding) as similarity
  FROM safety_check_cache sc
  WHERE 1 - (sc.embedding <=> query_embedding) > similarity_threshold
  ORDER BY sc.embedding <=> query_embedding
  LIMIT max_results;
END;
$$;
