export interface Bar {
    bar_id:string;
    bar_name:string;
    license:string;
    city:string;
    phone:string;
    addr:string;
    state:string;
}

export interface Beer {
    beer_id:string;
    beer_name:string;
    manf:string;
    price:number;
}

export interface Food {
    food_id:string;
    food_name:string;
    price:number;
}

export interface Drink {
    drink_id:string;
    name:string;
    price:number;
}

export interface BeerDetails {
    beer_id:string;
    bar_id:string;
    beer_name:string;
    bar_name:string;
    manf:string;
    price:number;
}

export interface Drinker {
    cust_id:string;
    drinker_name:string;
    city:string;
    phone:string;
    addr:string;
    state:string;
}
