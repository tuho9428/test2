// StockManager class to handle stock-related operations
class StockManager {
    constructor(db) {
      this.db = db;
    }
  
    async addStock(userId, symbol) {
      try {
        const checkQuery = 'SELECT COUNT(*) AS count FROM favorite_stocks WHERE user_id = $1 AND symbol = $2';
        const checkResult = await this.db.query(checkQuery, [userId, symbol]);
  
        if (checkResult.rows[0].count > 0) {
          // Symbol already exists for the user
          return { userId: userId, symbol: symbol, message: 'Symbol already exists for the user.' };
        } else {
          const insertQuery = 'INSERT INTO favorite_stocks (user_id, symbol) VALUES ($1, $2) RETURNING *';
          const values = [userId, symbol];
          const result = await this.db.query(insertQuery, values);
          
          return { userId: userId, symbol: symbol, message: '' };
        }
      } catch (error) {
        console.error('Error adding symbol:', error);
        return { message: 'Error adding symbol' };
      }
    }
  }

  export default StockManager;