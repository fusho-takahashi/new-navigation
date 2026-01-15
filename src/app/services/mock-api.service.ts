import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  description: string;
}

// フェッチ回数をトラッキング
let fetchCount = 0;

@Injectable({ providedIn: 'root' })
export class MockApiService {
  // アイテム一覧を取得（3秒の遅延）
  async getItems(): Promise<Item[]> {
    fetchCount++;
    const currentFetch = fetchCount;
    console.log(`[MockAPI] getItems() 開始 - フェッチ #${currentFetch}`);

    await this.delay(3000);

    const items: Item[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `アイテム ${i + 1}`,
      description: `これはアイテム ${i + 1} の説明です。フェッチ #${currentFetch} で取得されました。`,
    }));

    console.log(`[MockAPI] getItems() 完了 - フェッチ #${currentFetch}`);
    return items;
  }

  // 単一アイテムを取得（2秒の遅延）
  async getItem(id: number): Promise<Item | null> {
    fetchCount++;
    const currentFetch = fetchCount;
    console.log(`[MockAPI] getItem(${id}) 開始 - フェッチ #${currentFetch}`);

    await this.delay(2000);

    const item: Item = {
      id,
      title: `アイテム ${id}`,
      description: `これはアイテム ${id} の詳細ページです。フェッチ #${currentFetch} で取得されました。`,
    };

    console.log(`[MockAPI] getItem(${id}) 完了 - フェッチ #${currentFetch}`);
    return item;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
