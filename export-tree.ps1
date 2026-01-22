# === Tree export (names only) with common Next.js / Node exclusions ===

$root = "D:\leesam\OneDrive\Documents\Websites-Apps\syntra-studio-site"

# Exclude folders (entire folder + all contents) - add/remove as you like
$excludeDirs = @(
  ".git",
  ".github",
  ".next",
  "node_modules",
  ".turbo",
  ".vercel",
  ".netlify",
  ".cache",
  ".eslintcache",
  ".parcel-cache",
  ".pnpm-store",
  ".yarn",
  ".vscode",
  ".idea",
  "dist",
  "build",
  "out",
  "coverage",
  ".nyc_output",
  ".svelte-kit"
)

$outFile = Join-Path $root "tree-site.txt"

# Grab everything (files + folders), but filter out excluded folders and their contents
$items = Get-ChildItem -LiteralPath $root -Recurse -Force |
  Where-Object {
    $full = $_.FullName

    # Exclude any path segment that matches an excluded directory name
    -not ($excludeDirs | Where-Object { $full -match "\\$([regex]::Escape($_))(\\|$)" })
  } |
  Sort-Object FullName

# Build "tree" lines (no paths; indentation shows depth; folders end with "\")
$lines = New-Object System.Collections.Generic.List[string]

# Optional: include the root folder name as the first line
$lines.Add((Split-Path $root -Leaf) + "\")

foreach ($item in $items) {
  $rel = $item.FullName.Substring($root.Length).TrimStart('\')

  # Depth based on relative path segments
  $depth = if ($rel) { ($rel -split '\\').Count } else { 0 }

  # Since we printed root already, indent children starting at 1 level
  $indent = ('  ' * $depth)

  if ($item.PSIsContainer) {
    $lines.Add("$indent$($item.Name)\")
  } else {
    $lines.Add("$indent$($item.Name)")
  }
}

$lines | Set-Content -Encoding UTF8 -Path $outFile

Write-Host "Done. Tree exported to: $outFile"
