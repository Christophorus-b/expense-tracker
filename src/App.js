import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
import logo from './logo.svg';
import './App.css';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.9,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e2',
      title: 'Toilet paper',
      amount: 91.22,
      date: new Date(2020, 3, 22),
    },
    {
      id: 'e3',
      title: 'New Gaming Console',
      amount: 599.9,
      date: new Date(2021, 1, 19),
    },
    {
      id: 'e4',
      title: 'Kitchen Furniture',
      amount: 322.21,
      date: new Date(2020, 6, 17),
    }
  ];
  return (
    <div className="App">
      <Card className="App-card">
        <Expenses expensesDetails = {expenses} />
      </Card>
    </div>
  );
}

export default App;
