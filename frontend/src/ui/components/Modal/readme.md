# `Modal`

## Props

| Prop            | Type      | Default Value     | Desc                                    |
| :-------------- | :-------- | ----------------- | --------------------------------------- |
| modalId         | string    | 'modal-root'      | Id passed to the root element of Modal. |
| overlayBg       | string    | 'rgba(0,0,0,0.4)' | Color of the overlay.                   |
| contentBg       | string    | '#ffffff'         | Color of the content backgroud.         |
| maxWidth        | string    |                   | Max. width of the content.              |
| minWidth        | string    |                   | Min. width of the content.              |
| borderRadius    | string    | '4px'             | Border radius of the content.           |
| closeButton     | boolean   | false             | If true, Modal will have a 'X' icon.    |
| closeButtonIcon | ReactNode |                   | To replace the default 'X' icon.        |
| onMount         | function  |                   | Executes when the component mounts.     |
| onUnmount       | function  |                   | Executes when the component unmounts.   |
| onEscKey        | function  |                   | Executes on keydown of 'Esc' key.       |
| onCloseButton   | function  |                   | Executes when 'x' button is clicked.    |
| onOverlay       | function  |                   | Executes when overlay is clicked.       |

## Usage

```

<Modal closeButton={true}>
  // Components that will show up inside modal
</Modal>


```
