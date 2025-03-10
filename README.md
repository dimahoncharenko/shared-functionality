# shared-functionality

## Usage

To download a file from this repository, use one of the following methods:

### Linux/macOS (cURL)

```sh
curl -O https://raw.githubusercontent.com/dimahoncharenko/shared-functionality/main/PATH/TO/FILE
```

### Windows (PowerShell)

```sh
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/dimahoncharenko/shared-functionality/main/PATH/TO/FILE" -OutFile "FILE_NAME"
```

### Append content to a specific file in Linux/macOS (cURL)

```sh
curl -s https://raw.githubusercontent.com/dimahoncharenko/shared-functionality/main/Plain%20React/shared/lib/utils.ts >> destination.ts
```

### Append content to a specific file in Windows (PowerShell)

```sh
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/dimahoncharenko/shared-functionality/main/Plain%20React/shared/lib/utils.ts" | Select-Object -ExpandProperty Content | Out-File -Append -Encoding utf8 destination.ts
```
