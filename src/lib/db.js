import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {

    const dbconnection = await mysql.createConnection({
        host: process.env.NEXT_PUBLIC_MYSQL_HOST,
        database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
        user: process.env.NEXT_PUBLIC_MYSQL_USER,
        password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
        charset: 'utf8mb4',
    });

    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    }
    
    catch (error) {
        throw Error(error.message);
        return { error };
    }

}