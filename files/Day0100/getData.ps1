$target = "directory of file"
$destination = "path of destination"

Get-Content -Path $path | ? { $_ -match "@" -and ".com" } | Out-File $destination