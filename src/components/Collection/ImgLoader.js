import Loader from 'react-content-loader'

const ImgLoader = (props) => (
  <Loader
    speed={1}
    width={30}
    height={30}
    viewBox='0 0 30 30'
    backgroundColor='#210062'
    foregroundColor='#f9e2af'
    {...props}
  >
    <circle cx='15' cy='15' r='15' />
  </Loader>
)

export default ImgLoader


