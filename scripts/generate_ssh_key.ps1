$sshDir = Join-Path $env:USERPROFILE '.ssh'
New-Item -ItemType Directory -Force -Path $sshDir | Out-Null
$keyPath = Join-Path $sshDir 'id_ed25519_learningplaywright'
if (Test-Path $keyPath) { Write-Output "Key already exists at $keyPath"; exit 0 }
ssh-keygen -t ed25519 -C "akshilanghnoja@gamil.com" -f $keyPath -N ""
Start-Service ssh-agent -ErrorAction SilentlyContinue
ssh-add $keyPath
Get-Content ($keyPath + '.pub')
