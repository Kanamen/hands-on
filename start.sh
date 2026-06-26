#!/usr/bin/env bash
# ローカルサーバーを起動します（macOS / Linux 用）
# Python があれば Python の簡易サーバーを、なければ npx serve を使います

set -e

if command -v python3 >/dev/null 2>&1; then
  echo "http://localhost:8000 で起動します..."
  python3 -m http.server 8000
elif command -v python >/dev/null 2>&1; then
  echo "http://localhost:8000 で起動します..."
  python -m http.server 8000
else
  echo "Python が見つからないため npx serve を使用します..."
  npx --yes serve . -l 8000
fi
