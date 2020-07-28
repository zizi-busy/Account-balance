const personAccount = {
    firstName: 'Mike',
    lastName: 'Tyson',
    incomes: [{
            description: 'Salary',
            amount: 4000
        },
        {
            description: 'Prize',
            amount: 5000
        }
    ],
    expenses: [{
            description: 'Rent',
            amount: 900
        },
        {
            description: 'Transport',
            amount: 100
        }
    ],
    addIncome: function () {
        let income = personAccount.incomes;
 
        income.push({description: descript.value,
        amount: parseInt(amount.value)
        })
    },
    addExpense: function () {

        let expenses = personAccount.expenses;
        expenses.push({description: descript.value,
            amount: parseInt(amount.value)
        })
    },
    totalIncome: function() {
        let count = 0;
        
        for (const person in personAccount.incomes) {
            let income = personAccount.incomes[person];
                let {amount} = income;
                count += amount;
        }
        return count;     
   
    },

    totalExpenses: function() {
        let count = 0;

        for(const person in personAccount.expenses) {
            let expense = personAccount.expenses[person];
                let {amount} = expense;
                count += amount
  
        }
        return count;


    },

    accountBalance: function () {
        const balance = this.totalIncome() - this.totalExpense()
        return balance
    },

    removeIncome: function(item, index) {
        let income = personAccount.incomes;
        index = income.indexOf(item);
        if (index !== -1) {
            income.splice(index, 1);
    
        }

        
    },

    removeExpense: function(item, index) {
        let expenses = personAccount.expenses;
        index = expenses.indexOf(item);
        if (index !== -1) {
            expenses.splice(index, 1);
            
    
        }
        
    },

    accountBalance: function() {
        let totalExpenses = this.totalIncome();
        let totalIncome = this.totalExpenses();
        let accountBalance = totalExpenses -  totalIncome;
        return accountBalance;

    },  
}

console.log (personAccount)

// ***********ACTIVATE YOUR SOLDIERS by YELLING THEIR NAME. then give them a nick name ****



const accountName = document.querySelector('.account-name')
const accountBalance = document.querySelector ('.account-balance')

const form = document.querySelector ('.balance-form')
//input -select
const descript = document.querySelector('.description')
const amount = document.querySelector ('.theSum')
const selector = document.querySelector ('.expType')
// button
const addbtn =  document.querySelector('.addBtn')

const warn = document.querySelector('.warning');
//FINANCE CONTAINER

const fContainer = document.querySelector ('.finance-container')

const iContainer = document.querySelector ('.incomes__container')
const iTable =  document.querySelector ('.inc-table')
const iBody = document.querySelector('.i-body')
const iTotal = document.querySelector ('.total-in')


const eContainer = document.querySelector ('.exp__container')
const eTable =document.querySelector ('.exp-table')
const eBody = document.querySelector('.e-body')
const eTotal = document.querySelector ('.total-ex')


//<-------------display user name 
const displayName = () => {
       
    accountName.textContent = `${personAccount.firstName} ${personAccount.lastName}`; 
     
}
displayName ()

//<----------activate submit form-- this is some defult shit everyone uses for 'submit'---

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//<--------VALIDATE INPUT---------

addbtn.addEventListener('click', validateInput = () => {

    let strMatch = /^[A-Zaz]+$/ig
    let numMatch = /^[0-9]+$/
    if(descript.value.length === 0 || amount.value.length === 0)

    {  
        warn.textContent = 'Please add all input values!'
      /*  descript.style.outline ='2px solid #FF1493';
        selector.style.outline = '2px solid #FF1493';
        amount.style.outline ='2px solid #FF1493';*/

    } else if(!descript.value.match(strMatch) || !amount.value.match(numMatch)) {
        warn.textContent = 'Please input correct values!'
      /*  selector.style.outline = '2px solid #FF1493';
        descript.style.outline ='2px solid #FF1493f';
        amount.style.outline ='2px solid #FF1493';*/
    } else {
        checkInputValue();
    }

})


addbtn.addEventListener('click', checkInputValue = () => {

    if(selector.value === 'income') {;
        personAccount.addIncome();

    } else if(selector.value === 'expense') {
        personAccount.addExpense();
       

    }
    displayAccount();
    form.reset();  

})


const displayAccount = () => {
   iBody.textContent = '';
    eBody.textContent = '';
    let incomeContent = '';
    let expensesContent = '';

    for(const person in personAccount.incomes) {
        let income = personAccount.incomes[person];
        let {description, amount} = income
    
        incomeContent += 
                `<tr>
                    <td>${description}</td>
                    <td class="income">€${amount} <button class ="delete-iBtn">Delete</button</td>
                </tr>`
        iBody.innerHTML = incomeContent;

        iTotal.textContent = '€' + personAccount.totalIncome();

     
        
        removeIncomeUI = () => {
            personAccount.removeIncome(income);
            displayAccount();
        
  }
  let deleteBtnI = document.querySelector('.delete-iBtn')
   deleteBtnI.addEventListener ('click', () => {
    removeIncomeUI  ()
 })

 for (const person in personAccount.expenses)  {
    let expenses = personAccount.expenses[person]; 
        let {description, amount} = expenses;
        
        expensesContent += 
        `<tr>
            <td>${description}</td>
            <td class="income">€${amount} <button class ="delete-eBtn">Delete</button</td>
        </tr>`
        eBody.innerHTML = expensesContent;
        eTotal.textContent = '€' + personAccount.totalExpenses()
      

        removeExpenseUI = () => {
            personAccount.removeExpense(expenses);
            displayAccount();

        };

        let deleteBtnE = document.querySelector('.delete-eBtn')
        deleteBtnE.addEventListener ('click', () => {
            removeExpenseUI ()
     })
}  
accountBalance.textContent = personAccount.accountBalance();



} 
}
