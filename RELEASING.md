# Releasing @villedemontreal/hochelaga Package

This document explains how to publish the package at version x.y.z. Ensure that you’re following semver when choosing a version number.

## Publish Process
Update to latest locally (develop or master depending if you want to release to @latest or prerelease) to ensure you’re on the latest commit. Make sure you have no unstaged changes.

### Create a new branch
Create a new branch called x.y.z-proposal from the current commit.
Decide on the next `major.minor.patch` release number based on [semver](http://semver.org/) guidelines. Change CHANGELOG.md file.


### Releasing on master/main branch

Run:
```batch
npm version major|minor|patch -m \"ci(release): %s\"
```
Next, 

```batch
git push --tags
```
Next, 

```batch
git push
```
Next, merge the branch to master or main, then merge back to develop

### Releasing on develop branch

Run: 
```batch
npm --preid=next version prerelease -m \"ci(prerelease): %s for develop\"
```
or you can use 
```batch
npm run dev:release:patch
```

Next,

```batch
git push --tags
```
Next,

```batch
git push
```
Next, merge the branch to develop 
