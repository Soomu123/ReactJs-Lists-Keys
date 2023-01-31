import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'floyd',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'jacob jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'devon-lane',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      <UserProfile
        userDetails={userDetailsList[0]}
        key={userDetailsList[0].uniqueNo}
      />
      <UserProfile
        userDetails={userDetailsList[1]}
        key={userDetailsList[1].uniqueNo}
      />
      <UserProfile
        userDetails={userDetailsList[2]}
        key={userDetailsList[2].uniqueNo}
      />
      <UserProfile
        userDetails={userDetailsList[3]}
        key={userDetailsList[3].uniqueNo}
      />
    </ul>
  </div>
)

export default App
