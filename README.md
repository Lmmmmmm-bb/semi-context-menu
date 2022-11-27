# Semi Context Menu

[![CodeQL](https://github.com/Lmmmmmm-bb/semi-context-menu/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Lmmmmmm-bb/semi-context-menu/actions/workflows/codeql-analysis.yml)
[![Release](https://github.com/Lmmmmmm-bb/semi-context-menu/actions/workflows/release.yml/badge.svg)](https://github.com/Lmmmmmm-bb/semi-context-menu/actions/workflows/release.yml)
[![GitHub license](https://img.shields.io/github/license/Lmmmmmm-bb/semi-context-menu)](https://github.com/Lmmmmmm-bb/semi-context-menu/blob/main/LICENSE)
[![Npm Release](https://img.shields.io/github/v/release/Lmmmmmm-bb/semi-context-menu?include_prereleases&sort=semver)](https://github.com/Lmmmmmm-bb/semi-context-menu/releases)

This is a simple context menu, based on the [Semi Design](https://semi.design/) Dropdown component.

- No extra dependencies.
- No extra props, all props base Semi Design Dropdown.

```bash
pnpm i semi-context-menu
```

## Example

```tsx
export default () => {
  const renderItem = (left: string, right: string) => (
    <div className='item'>
      <div className='left'>{left}</div>
      <div className='right'>{right}</div>
    </div>
  );

  const menu = (
    <Dropdown.Menu>
      <Dropdown.Title>Context Menu</Dropdown.Title>
      <Dropdown.Divider />
      <Dropdown.Item icon={<IconCopy />} onClick={() => Toast.success('Copy')}>
        {renderItem('Copy', 'Ctrl + C')}
      </Dropdown.Item>
      <Dropdown.Item
        icon={<IconRefresh />}
        onClick={() => Toast.success('Refresh')}
      >
        {renderItem('Refresh', 'Ctrl + R')}
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <div className='App'>
      <SemiContextMenu clickToHide render={menu}>
        <div>This is Context Menu Operable Area</div>
      </SemiContextMenu>
    </div>
  );
};
```
