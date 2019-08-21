export interface Login{
    email: String,
    password: String
}

export interface UserRegister{
    first_name: String,
    last_name: String,
    email: String,
    born_date: String,
    id_number: String,
    id_type: String,
    password:String,
    gender: String,
    user_rol?: String
}

export interface DialogData{
    icon:string,
    message: string
}

export interface Propiedad{
    name: String,
    address: String,
    description: String,
    estate_type: String,
    comercial_activity: String,
    cost: String,
    img_url: Array<string>
    location:{
        country:String,
        state:String,
        city:String
    },
    contact_list:[{
        rol?: String,
        first_name: String,
        last_name: String,
        phone_number: Number,
        cellphone_number: Number,
        mail: String
    }]
}

export interface Task{
    _id?: String
    name: String,
    description: String,
    is_completed: String,
    extension: {
        start_date: Date,
        end_date: Date
    },
    user: {
        id_type: String,
        id_number: String,
        first_name: String,
        last_name: String
    }
}

export interface Plan{
    _id?: string,
    name:String,
    group: String,
    duration: String,
    is_completed: String,
    user:{
        id_type:String,
        id_number: { type:String, minlength:7, maxlength:10 },
        first_name: String,
        last_name: String,
        user_rol: String,
        amount_task: Number,
        task:Task[];
    }
}