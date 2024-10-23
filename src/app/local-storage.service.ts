export class LocalStorageService {
    static saveSearchHistory(history: any[]) {
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }
  
    static getSearchHistory(): any[] {
      return JSON.parse(localStorage.getItem('searchHistory') || '[]');
    }
  
    static clearSearch(username: string) {
      const history = this.getSearchHistory().filter(h => h.searchTerm !== username);
      this.saveSearchHistory(history);
    }
  }
  