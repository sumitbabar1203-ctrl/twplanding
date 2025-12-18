export interface BlogPost {
  title: string;
  author: string;
  content: string;
}

export interface SearchFilters {
  accountId: string;
  startDate: string;
  endDate: string;
}

export interface LeadData {
  accountId: string;
  accountName: string;
  date: string;
  userName: string;
  leadQuality: string;
  highlight: string;
  suggestions?: string;
}
