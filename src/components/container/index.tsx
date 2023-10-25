interface Props{
  children: React.ReactNode
}

const Container: React.FC<Props> = ({children}) => {
  return (

    <section className="flex justify-center">
        <div className="container">
          {children}
        </div>
    </section>

  )
}

export default Container;