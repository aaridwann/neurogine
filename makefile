.PHONY: yarn-all clean-ios

# Perintah utama
yarn:
	@echo "🔄 Memulai proses reset dan instalasi..."
	@echo "🧹 Menghapus node_modules dan file cache..."
	rm -rf node_modules yarn.lock
	@echo "📦 Menginstal ulang dependency dengan Yarn..."
	yarn install
	$(MAKE) clean-ios
	@echo "✅ Semua proses selesai!"

# Perintah khusus untuk membersihkan dan setup iOS
clean-ios:
	@echo "🗑️  Menghapus build iOS dan Pods..."
	rm -rf ios/Pods ios/Podfile.lock ios/build ~/Library/Developer/Xcode/DerivedData
	@echo "⚙️  Menjalankan Pod Install..."
	cd ios && pod install
	
