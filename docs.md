# React Gridstrap

Intro to `react-gridstrap`.

## Examples

### Columns of the same size

Column components do not need to be passed the `xs` prop. Doing so will not affect its rendering either way.

```jsx
<Container fluid>
  <Row>
    <Column>
      <DemoDiv demoText='auto' />
    </Column>
    <Column xs>
      <DemoDiv demoText='auto' />
    </Column>
    <Column>
      <DemoDiv demoText='auto' />
    </Column>
  </Row>
</Container>
```

### Setting one column width

```jsx
<Container fluid>
  <Row>
    <Column> <DemoDiv demoText='auto' /> </Column>
    <Column xs='6'>
      <DemoDiv demoText='6' />
    </Column>
    <Column> <DemoDiv demoText='auto' /> </Column>
  </Row>
</Container>
```

### Variable width content

```jsx
<Container>
  <Row>
    <Column> <DemoDiv demoText='auto' /> </Column>
    <Column xs='12' md='auto'>
      <DemoDiv demoText='variable' />
    </Column>
    <Column> <DemoDiv demoText='auto' /> </Column>
  </Row>
</Container>
```

### Fixed-Width Container

```jsx
<Container style={{ width: '600px' }}>
  <Row>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
  </Row>
  <Row>
    <Column> <DemoDiv demoText='4' /> </Column>
    <Column> <DemoDiv demoText='4' /> </Column>
    <Column> <DemoDiv demoText='4' /> </Column>
  </Row>
</Container>
```

### Fluid Container

```jsx
<Container fluid>
  <Row>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
    <Column> <DemoDiv demoText='1' /> </Column>
  </Row>
  <Row>
    <Column> <DemoDiv demoText='4' /> </Column>
    <Column> <DemoDiv demoText='4' /> </Column>
    <Column> <DemoDiv demoText='4' /> </Column>
  </Row>
</Container>
```
