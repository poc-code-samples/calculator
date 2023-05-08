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

## Vendoring

Vendoring is about to copy the library content into the source of the main project via some dependency management mechanism. 

PROS:
- No user will push code to library mainstream.
- The library will can be updated with functionality added to the mainstream vvia dependency manager.

CONS:
- functionality added to the library can not be included in the mainstream
