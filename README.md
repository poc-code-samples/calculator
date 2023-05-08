# POC: Investigate when git submodules are convenient or not.

We want to find the possible options we have by using git submodules vs vendoring when a project has a dependency with another project but these ones are developed independently.

Here in the demo, the project (this repository) will have a dependency with a [library](https://github.com/poc-code-samples/lib-calculator)

This project will be kind of a calculator that uses the operations `add`, `sub`, `mul`, and `div` exported form the library


## Git submodules

Allow developers to wotk on both project and library at the same time. But both repositories will be treated independently.

PROS:
- If an update reach to mainstream library can be updated since the project is looking at a commit in the library repository
- We can develop library code and share it with the mainstream

CONS"
- Any potential user can push to library code.


Making mistake by adding modules is something difficult to fix in git. 

### Removing modules

As of today `git rm <path to submodule>` && `git commit` will do the trick.

Previous versions of git need more work.

- `rm .git/modules/<path to module>`
- `git config --remove-section submodule.<path to submodule>`
- `git rm --cached <path to submodule>`
- `rm -rf <path to submodule>`


## Findings

- Submodules can or can not be updated if they are then when we run status on main project, the submodules wil show (new commits).
- Update a submodule 
    - option1: `cd submodule-dir && git fetch && git merge origin/main`
    - option2: In main project do `git submodule update --remote SubmoduleName`

- Cloning a repository with submodules can be possible by appending --recursive to the `git clone` command. If we do not do this manual update of modules is required after clone
    - option1: `git clone main-repo && cd submoduledir && git submodule init && git submodule update`
    - option2: `git clone --recursive main-repo`

    
## Vendoring

Vendoring is about to copy the library content into the source of the main project via some dependency management mechanism. 

PROS:
- No user will push code to library mainstream.
- The library will can be updated with functionality added to the mainstream vvia dependency manager.

CONS:
- functionality added to the library can not be included in the mainstream
