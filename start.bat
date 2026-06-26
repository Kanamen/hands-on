@echo off
REM ローカルサーバーを起動します（Windows用）
REM Python があれば Python の簡易サーバーを、なければ npx serve を使います

where python >nul 2>nul
if %errorlevel%==0 (
  echo http://localhost:8000 で起動します...
  python -m http.server 8000
  goto :eof
)

echo Python が見つからないため npx serve を使用します...
npx --yes serve . -l 8000
