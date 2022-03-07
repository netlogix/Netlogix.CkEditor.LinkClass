# Netlogix.CkEditor.LinkClass

This package extends the CKEditor 5 link editor with the functionality to add preconfigured CSS classes to selected links.

## Installation

```bash
composer require netlogix/ckeditor-linkclass
```

## Usage

1. Define within the `Settings.yaml` which CSS classes for links are available for the concrete Neos CMS installation:

```yaml
Netlogix:
  CkEditor:
    LinkClass:
      options:
        'primaryButton':
          label: 'Primary Button'
          class: 'btn btn-primary'
          position: '10'
        'secondaryButton':
          label: 'Secondary Button'
          class: 'btn btn-secondary'
          position: '20'
```

2. Define which previously defined CSS classes can be applied to links in the individual NodeTypes properties of the concrete Neos CMS installation:

```yaml
'Neos.Demo:Text':
  properties:
    text:
      ui:
        inline:
          editorOptions:
            linking:
              netlogixLinkClass:
                primaryButton: true
                secondaryButton: true
```

## Contributions

You are welcome to contribute by making pull requests, adding issues, etc.

After modifying the JavaScript source code of the package, the JavaScript files can be rebuilt using the following steps:

```bash
cd Resources/Private/CKEditor/LinkClass
nvm use
yarn
yarn build
```

Then commit the modified files including `Plugin.js` and `Plugin.js.map`.


