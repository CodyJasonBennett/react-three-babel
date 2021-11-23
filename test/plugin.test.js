const babel = require("@babel/core");
const plugin = require("..");

const example = `
import { createRoot } from '@react-three/fiber'

createRoot(canvasNode).render(
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
)
`;

it("works", () => {
  const { code } = babel.transform(example, {
    plugins: [plugin],
    sourceType: "module",
  });
  expect(code).toMatchSnapshot();
});

const exampleWithDrei = `
import { createRoot } from '@react-three/fiber'
import { Html } from 'drei'

createRoot(canvasNode).render(
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
    <Html>
      <div>Hello World</div>
    </Html>
  </mesh>
)
`;

it("works with drei", () => {
  const { code } = babel.transform(exampleWithDrei, {
    plugins: [plugin],
    sourceType: "module",
  });
  expect(code).toMatchSnapshot();
});

const exampleWithImportShadowing = `
import { createRoot } from '@react-three/fiber'
import { BoxGeometry } from 'three'

createRoot(canvasNode).render(
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
)
`;

it("works with import shadowing", () => {
  const { code } = babel.transform(exampleWithImportShadowing, {
    plugins: [plugin],
    sourceType: "module",
  });
  expect(code).toMatchSnapshot();
});
