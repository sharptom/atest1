
name: Unzip briwebsite.zip and remove zip

on:
  push:
    paths:
      - 'briwebsite.zip'

jobs:
  unzip-and-clean:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Unzip briwebsite.zip into briwebsite folder
        run: |
          unzip -o briwebsite.zip -d briwebsite/
          rm briwebsite.zip

      - name: Commit and push changes
        run: |
          git config --local user.name "github-actions[bot]"
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add briwebsite/
          git rm briwebsite.zip
          git commit -m "Auto: unzip briwebsite.zip and remove zip"
          git push
