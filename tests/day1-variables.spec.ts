import {test} from '@playwright/test'

test ('day1 - variables', () => {
    
    const qa = {
    firstname: "Elena",
    lastName: "Khlobystova",
    experience: 5,
    isSenior: true
}

const user = {
    id: 1,
    name: "Elena",
    email: "blabla@gmail.com",
    isActive: true
}

const statuses = [
    "active", "inactive", "pending"
]

const base = `Привет, ${qa.firstname} ${qa.lastName}! Твой опыт: ${qa.experience}`

console.log(qa, user, statuses, base)
console.log('test')
})