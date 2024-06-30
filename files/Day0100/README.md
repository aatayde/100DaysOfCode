# Day 100 | powershell file read & write

    how to read from a file & write to a file

## Resources

1. [Get-Content](#get-content)
1. [Out-File](#out-file)

## [Get-Content](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content?view=powershell-7.4)

Read contents of a file

`Get-Content -Path C:\Temp\file.log`

## Get specific math from

`$path = "directory of file"`

Get matches for '@' signs & ".com"

`Get-Content -Path $path | ? { $_ -match "@" -and ".com" }`

this will return an email

Now lets append the returned value to another file

## [Out-File](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file?view=powershell-7.4)

write contents to a file

`Get-Content -Path $path | ? { $_ -match "@" -and ".com" } | Out-File .\test.txt`
