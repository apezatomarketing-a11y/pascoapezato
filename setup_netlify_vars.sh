#!/bin/bash

# Script para configurar variáveis de ambiente no Netlify via Netlify CLI
# Certifique-se de estar logado (netlify login) e vinculado ao site (netlify link)

echo "Configurando variáveis de ambiente no Netlify..."

netlify env:set VITE_SUPABASE_URL "https://ktqsgumieftdspgtxfhn.supabase.co"
netlify env:set VITE_SUPABASE_ANON_KEY "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cXNndW1pZWZ0ZHNwZ3R4ZmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2ODIyNDEsImV4cCI6MjA4NTI1ODI0MX0.HauT5j8EFnRVlnJYrjA3vuFEKW-77aUFSzf_Ys3BWzA"
netlify env:set SUPABASE_KEY "sb_secret_hXxj0lAFH_TD5pPCoYabJg_Zbas0bdF"
netlify env:set GEMINI_API_KEY "AIzaSyBg353Ko7lHT-DnThBqU2wr_9YjQ4N7OE8"

echo "Configuração concluída! Agora você pode rodar o deploy."
