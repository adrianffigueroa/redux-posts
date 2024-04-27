import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
