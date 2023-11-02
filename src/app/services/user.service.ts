export class UserService{
    getUser(id: string){
    if(id === '1'){
        return {
            id: '1',
            name: 'First'
        }
    }
    else{
        return {
            id: '4',
            name: 'UpdatedFirst'
        }
    }
    }
}