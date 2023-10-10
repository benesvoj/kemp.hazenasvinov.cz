interface ButtonProps {
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  return(
    <div className={'btn'}>
      {props.children}
    </div>
  )
}