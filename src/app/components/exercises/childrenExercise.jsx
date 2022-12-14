import React from "react"
import CollapseWrapper from "../common/collapse"
import PropTypes from "prop-types"

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <BlockComponent>
        <Component />
        <Component />
        <Component />
      </BlockComponent>
    </CollapseWrapper>
  )
}

const BlockComponent = ({ children }) => {
  const countChildren = React.Children.count(children)

  if (!countChildren) {
    return <div>Нет элементов</div>
  }

  return (
    <ul>
      {React.Children.map(children, (child) => {
        if (child.type === Component) {
          return <li type="1">{child}</li>
        }
      })}
    </ul>
  )
}
BlockComponent.propTypes = {
  children: PropTypes.array
}

const Component = () => {
  return <div>Компонент списка</div>
}

export default ChildrenExercise
