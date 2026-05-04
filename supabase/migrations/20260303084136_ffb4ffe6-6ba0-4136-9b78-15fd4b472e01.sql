
-- Explicitly deny UPDATE operations on contact_submissions
CREATE POLICY "Deny all updates"
  ON public.contact_submissions
  FOR UPDATE
  USING (false);

-- Explicitly deny DELETE operations on contact_submissions
CREATE POLICY "Deny all deletes"
  ON public.contact_submissions
  FOR DELETE
  USING (false);
