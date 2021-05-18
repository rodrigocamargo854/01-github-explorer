
// o simbolo de ? no construtor 
//siginifica que não é o obrigatorio o campo
type User = {
    name: string
    email: string
    adress: {
        city: string
        street?: string
    }
}


function showWelcomeUser(user: User) {
    return `Welcome ${user.name}, your email is ${user.email} 
    and your adress is ${user.adress}`;

}


showWelcomeUser({
    name: 'Jhon Doe',
    email: 'doe@gmail.com',
    adress: {
        street: ' rua abc',
        city: 'Santos'
    }
});