# [<img src="https://github.com/vamsitp/spexdocs/blob/master/docs/assets/images/Logo.png?raw=true" width="100">](https://vamsitp.github.io/spex)
[SpecFlow](https://specflow.org/) (`Features`) _**sync**_ to [Azure DevOps](https://azure.microsoft.com/en-in/services/devops/test-plans/) (`TestCases`)

[<img src="https://github.com/vamsitp/spexdocs/blob/master/docs/assets/images/Sync.png?raw=true" width="240" style="box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">](https://vamsitp.github.io/spex)

##### USAGE
**`spex`**`<curr-dir/bdd-project-folder-path>`

---

### REFER TO: [DOCS](https://vamsitp.github.io/spexdocs/)

> Test using [Azure DevOps Demo Generator](https://azuredevopsdemogenerator.azurewebsites.net/)

---

##### INSTALLATION
> **PRE-REQ**: [.NET Core SDK](https://dotnet.microsoft.com/download/dotnet-core/3.1)
 
**`dotnet tool install -g --no-cache --ignore-failed-sources spex`** <br />
`dotnet tool update -g --no-cache --ignore-failed-sources spex` <br />
`dotnet tool uninstall -g spex`

> If the Tool is not accessible post installation, add `%USERPROFILE%\.dotnet\tools` to the PATH env-var.
> 
> If you get an error stating *Failed to create shell shim for tool 'spex': Command 'spex' conflicts with an existing command from another tool*, run: `del %USERPROFILE%\.dotnet\tools\spex.exe`
