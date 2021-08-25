import './button.styles.scss'

const Button = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
)

export default Button
