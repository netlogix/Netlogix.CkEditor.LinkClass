# Netlogix.CkEditor.LinkClass

This package adds to the CKEditor 5 the ability to select a class for a link. 

The classes that can be added to a link are defined in the Settings.yaml file as shown as in the following example:

```
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
        'dangerButton':
          label: 'Danger Button'
          class: 'btn btn-danger'
          position: '15'
        'infoButton':
          label: 'Info Button'
          class: 'btn btn-info'
          position: '30'
```

Afterwards, the ability to apply concrete classes must be allowed in the respective NodeTypes, as illustrated in the following example:

```
linking:
  netlogixLinkClass:
      greenButton: true
      whiteButton: true
      blueButton: true
```