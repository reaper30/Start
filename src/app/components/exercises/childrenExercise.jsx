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
export default ChildrenExercise

const BlockComponent = ({ children }) => {
  const countChildren = React.Children.count(children)
  const arrayOfChildren = React.Children.toArray(children)

  if (!countChildren) {
    return <div>Нет элементов</div>
  }

  return React.Children.map(arrayOfChildren, (child) => {
    return React.cloneElement(child, {
      ...child.props,
      num: +child.key.replace(".", "") + 1
    })
  })
}

BlockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const Component = ({ num }) => {
  return <div>{num}. Компонент списка</div>
}

Component.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
