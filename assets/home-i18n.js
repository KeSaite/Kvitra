const EN = Object.freeze({
  "a1": "No additional monitoring software is needed. Use an existing SSH service with an account that can read the required system information.",
  "a2": "Yes, if the bastion can reach your target server. Monitoring, terminal sessions and tunnels can all use it.",
  "a3": "Android 14 or later.",
  "a4": "No iOS version is available at the moment.",
  "brand_home": "Meows home",
  "connection_auth_label": "Sign-in",
  "connection_auth_value": "Password or private key",
  "connection_middle_label": "Meows service",
  "connection_middle_value": "No relay or analytics backend",
  "connection_path_label": "Connection",
  "connection_path_value": "Android device → SSH → server, directly or through a bastion",
  "connection_server_label": "Server side",
  "connection_server_value": "An existing SSH service; no monitoring agent or extra monitoring port",
  "examples_aria": "Command examples",
  "fact_languages_label": "Interface",
  "fact_languages_value": "English · 简体中文 · 繁體中文 · 日本語 · 한국어",
  "fact_permission_label": "Runtime permission",
  "fact_permission_value": "Notifications (optional)",
  "fact_server_label": "Server side",
  "fact_server_value": "No additional monitoring software",
  "faq_title": "Before you start",
  "footer_docs": "Manual",
  "footer_note": "Independently developed and maintained by Li Bainan.",
  "footer_privacy": "Privacy Policy",
  "footer_source": "Website source on GitHub",
  "footer_terms": "Terms of Use",
  "hero_body": "Connect to your Linux servers over SSH to check their status, open a terminal or manage Docker containers.",
  "hero_caption": "Server locations and live status cards.",
  "hero_kicker": "Android 14+",
  "hero_price": "One-time purchase",
  "hero_price_note": "Includes updates. No subscription, ads or in-app purchases.",
  "hero_title": "SSH and server monitoring for Android",
  "inside_title": "Using Meows",
  "language_auto": "Browser language",
  "language_label": "Language",
  "lens_body": "Tap a recognized IP address, domain, URL or permission string in the terminal or a Docker log. Lens lists the queries and actions available for that value.",
  "lens_label": "Shell · Lens",
  "lens_note": "Queries and web links are opened when you select an action. Lens does not execute commands automatically.",
  "lens_stack_aria": "Meows tools and Lens",
  "lens_title": "Query addresses from terminal output",
  "maker_p1": "Testing only on my own machines missed differences in other Linux environments. People on LowEndTalk shared system information and access to test servers, helping me correct metric collection and history charts.",
  "maker_p2": "With their permission, some participants are listed on Meows' acknowledgements page.",
  "maker_title": "Thanks to the people who helped test",
  "meta_description": "Meows is a native Android app for SSH, Linux server monitoring, Docker and SSH tunnels. No monitoring agent is required on the server.",
  "meta_title": "Meows",
  "monitor_alerts": "Choose alert thresholds per server and whether to receive disconnect and recovery notifications. When several thresholds are exceeded, Meows sends a combined notification.",
  "monitor_body": "Each server has a status card for CPU, memory, disk, network and TCP readings. Switch to a chart to see recent history and current process, mount or network interface details.",
  "monitor_caption": "CPU history with the current process list below.",
  "monitor_label": "Monitoring",
  "monitor_title": "Live metrics and recent history",
  "more_body": "When your SSH account has access to Docker, you can view container status and logs or start and stop containers. SSH tunnels support local and remote forwarding, including connections through a bastion host.",
  "more_label": "Other tools",
  "more_title": "Docker, tunnels and other tools",
  "more_tools": "Network queries, conversion tools, and the Linux and C manuals are in Settings. They can be used without connecting a server.",
  "nav_docs": "Manual",
  "nav_inside": "Features",
  "nav_label": "Primary navigation",
  "nav_questions": "Questions",
  "nav_why": "Background",
  "privacy_a1": "SSH passwords and private keys are encrypted on your device and protected using Android Keystore.",
  "privacy_a2": "Monitoring history is stored on your device. It is not sent to Meows or other third parties.",
  "privacy_a3": "Your phone connects to the servers you configure over SSH, directly or through a bastion. Meows has no relay service.",
  "privacy_a4": "Optional backups are encrypted on the device and stored in your own Google Drive account's hidden app data folder. Monitoring history is not included.",
  "privacy_body": "DNS, WHOIS and TLS queries make network connections when you use them. Queries against the local IP database stay on the device.",
  "privacy_link": "Read the privacy policy →",
  "privacy_q1": "SSH credentials",
  "privacy_q2": "Monitoring data",
  "privacy_q3": "Connection path",
  "privacy_q4": "Optional backup",
  "privacy_title": "Credentials and data",
  "q1": "Do I need to install anything on the server?",
  "q2": "Can I connect through a bastion host?",
  "q3": "Which Android version is required?",
  "q4": "Is there an iOS version?",
  "sketch_community_title": "Line drawing of system samples becoming handwritten testing notes",
  "sketch_connection_desc": "A terminal prompt is connected to a three-bay server by an SSH line.",
  "sketch_connection_title": "Phone and server connected over SSH",
  "sketch_lens_title": "Line drawing of a magnifying glass examining a value in terminal output",
  "sketch_monitor_title": "Line drawing of a history chart on a sheet of paper",
  "sketch_operations_title": "Line drawing of SSH container management and separate network tools",
  "sketch_privacy_title": "Line drawing of a file drawer and a key representing credential storage",
  "skip": "Skip to content",
  "story_p1": "I started building Meows to check my own servers from my phone. Even for a quick look at CPU load or disk space, I was logging into each machine over SSH.",
  "story_p2": "I did not want to install another monitoring program on those small servers. Meows uses their existing SSH access and presents Linux system information as cards and charts.",
  "story_title": "Built for my own servers",
  "tool_index_intro": "Tools",
  "tool_jump": "Bastion hosts",
  "tool_manuals": "Linux & C manuals",
  "tool_permissions": "Permission calculator",
  "tool_regex_time": "Regex / Timestamp",
  "tool_subnet_cron": "Subnet / Cron",
  "tool_terminal": "SSH terminal",
  "tool_tunnels": "SSH tunnels"
});

const ZH_CN = Object.freeze({
  "a1": "不需要额外安装监控程序。Meows 使用现有的 SSH 服务，登录账号需要有读取相应系统信息的权限。",
  "a2": "可以，前提是跳板机能访问目标服务器。监控、终端和 SSH 隧道都可以经它连接。",
  "a3": "Android 14 或更新版本。",
  "a4": "目前没有 iOS 版。",
  "brand_home": "Meows 首页",
  "connection_auth_label": "登录方式",
  "connection_auth_value": "密码或私钥",
  "connection_middle_label": "Meows 服务",
  "connection_middle_value": "无中转或统计后台",
  "connection_path_label": "连接路径",
  "connection_path_value": "Android 设备 → SSH → 服务器，可经跳板机",
  "connection_server_label": "服务器端",
  "connection_server_value": "使用现有 SSH 服务，无须安装监控程序或另开监控端口",
  "examples_aria": "命令示例",
  "fact_languages_label": "界面",
  "fact_languages_value": "简中 / 繁中 / 英 / 日 / 韩",
  "fact_permission_label": "运行时权限",
  "fact_permission_value": "通知（可选）",
  "fact_server_label": "服务器端",
  "fact_server_value": "无需另装监控程序",
  "faq_title": "使用前的几个问题",
  "footer_docs": "使用说明",
  "footer_note": "由 Li Bainan 独立开发与维护。",
  "footer_privacy": "隐私政策",
  "footer_source": "GitHub 上的网站源码",
  "footer_terms": "使用条款",
  "hero_body": "通过 SSH 连接 Linux 服务器，在手机上查看状态、使用终端和管理 Docker 容器。",
  "hero_caption": "服务器位置与实时状态卡片。",
  "hero_kicker": "Android 14+",
  "hero_price": "一次买断",
  "hero_price_note": "包含后续更新，无订阅、广告或内购",
  "hero_title": "手机上的 SSH 与服务器监控",
  "inside_title": "使用 Meows",
  "language_auto": "跟随浏览器",
  "language_label": "语言",
  "lens_body": "点选终端或 Docker 日志中已识别的 IP、域名、URL 或权限字符串，Lens 会列出对应的查询和操作，不必重新复制输入。",
  "lens_label": "Shell · Lens",
  "lens_note": "查询和打开网页由你选择，Lens 不会自动执行命令。",
  "lens_stack_aria": "Meows 工具页和 Lens",
  "lens_title": "查询终端里的地址",
  "maker_p1": "只用自己的服务器测试，很难发现其他 Linux 环境中的问题。LowEndTalk 的朋友分享系统信息并提供测试环境，帮助我修正了指标采集和历史图表。",
  "maker_p2": "经本人同意，部分参与者的昵称收录在 Meows 的致谢页。",
  "maker_title": "感谢参与测试的朋友",
  "meta_description": "Meows 是原生 Android SSH 与 Linux 服务器监控应用，可使用终端、管理 Docker 容器和 SSH 隧道，服务器端无须安装监控程序。",
  "meta_title": "Meows",
  "monitor_alerts": "告警按服务器设置阈值，也可启用断线和恢复通知。多项同时超标时，会合并为一条通知。",
  "monitor_body": "每台服务器有独立的状态卡片，可查看 CPU、内存、磁盘、网络和 TCP 数据。切换到图表后，可以查看近期历史，以及当前的进程、挂载点或网卡明细。",
  "monitor_caption": "CPU 历史曲线，下方为当前进程明细。",
  "monitor_label": "监控",
  "monitor_title": "实时状态与历史记录",
  "more_body": "SSH 账号有 Docker 权限时，可查看容器状态和日志、启动或停止容器。SSH 隧道支持本地和远程转发，也能经跳板机连接。",
  "more_label": "其他工具",
  "more_title": "Docker、隧道与工具",
  "more_tools": "网络查询、常用换算工具以及 Linux 和 C 手册放在设置页，不连接服务器也能使用。",
  "nav_docs": "使用说明",
  "nav_inside": "功能",
  "nav_label": "主导航",
  "nav_questions": "常见问题",
  "nav_why": "由来",
  "privacy_a1": "SSH 密码和私钥在设备上加密保存，并通过 Android Keystore 保护。",
  "privacy_a2": "监控历史保存在设备上，不上传到 Meows 或其他第三方。",
  "privacy_a3": "手机通过 SSH 连接到你配置的服务器，可经跳板机。Meows 不提供中转服务。",
  "privacy_a4": "备份在设备端加密后，存入你自己的 Google Drive 隐藏应用数据目录，不包含监控历史。",
  "privacy_body": "DNS、WHOIS 和 TLS 查询会在你使用时联网。IP 本地数据库查询在设备上完成。",
  "privacy_link": "查看隐私政策 →",
  "privacy_q1": "SSH 凭据",
  "privacy_q2": "监控数据",
  "privacy_q3": "连接路径",
  "privacy_q4": "可选备份",
  "privacy_title": "凭据与数据",
  "q1": "服务器上需要安装什么？",
  "q2": "可以通过跳板机连接吗？",
  "q3": "需要什么 Android 版本？",
  "q4": "有 iOS 版吗？",
  "sketch_community_title": "系统样本转为手写测试记录的手绘示意",
  "sketch_connection_desc": "手机上的终端通过 SSH 连线连接到一台三层服务器。",
  "sketch_connection_title": "通过 SSH 连接的手机与服务器",
  "sketch_lens_title": "用放大镜查看终端输出中数值的手绘示意",
  "sketch_monitor_title": "纸面历史曲线的手绘示意",
  "sketch_operations_title": "SSH 容器管理与独立网络工具的手绘示意",
  "sketch_privacy_title": "用文件抽屉与钥匙表现凭据保管的手绘示意",
  "skip": "跳到正文",
  "story_p1": "Meows 最初是为了在手机上查看我自己的服务器。即使只想确认 CPU 负载或磁盘空间，也得逐台 SSH 登录。",
  "story_p2": "我不想为此给这些小型服务器多装一套监控程序。Meows 沿用已有的 SSH 连接，把 Linux 系统信息整理成卡片和图表。",
  "story_title": "Meows 的由来",
  "tool_index_intro": "工具列表",
  "tool_jump": "跳板机",
  "tool_manuals": "Linux / C 手册",
  "tool_permissions": "权限计算",
  "tool_regex_time": "正则 / 时间戳",
  "tool_subnet_cron": "子网 / Cron",
  "tool_terminal": "SSH 终端",
  "tool_tunnels": "SSH 隧道"
});

const ZH_TW = Object.freeze({
  "a1": "不需要額外安裝監控程式。Meows 使用既有的 SSH 服務，登入帳號需要有讀取相關系統資訊的權限。",
  "a2": "可以，前提是跳板機能存取目標伺服器。監控、終端機和 SSH 隧道都能經由它連線。",
  "a3": "Android 14 或更新版本。",
  "a4": "目前沒有 iOS 版。",
  "brand_home": "Meows 首頁",
  "connection_auth_label": "登入方式",
  "connection_auth_value": "密碼或私鑰",
  "connection_middle_label": "Meows 服務",
  "connection_middle_value": "無中繼或分析後端",
  "connection_path_label": "連線路徑",
  "connection_path_value": "Android 裝置 → SSH → 伺服器，可經由跳板機",
  "connection_server_label": "伺服器端",
  "connection_server_value": "使用既有 SSH 服務，不必安裝監控程式或另開監控連接埠",
  "examples_aria": "命令範例",
  "fact_languages_label": "介面",
  "fact_languages_value": "簡中 / 繁中 / 英 / 日 / 韓",
  "fact_permission_label": "執行階段權限",
  "fact_permission_value": "通知（選用）",
  "fact_server_label": "伺服器端",
  "fact_server_value": "無須另裝監控程式",
  "faq_title": "使用前的幾個問題",
  "footer_docs": "使用說明",
  "footer_note": "由 Li Bainan 獨立開發與維護。",
  "footer_privacy": "隱私權政策",
  "footer_source": "GitHub 上的網站原始碼",
  "footer_terms": "使用條款",
  "hero_body": "透過 SSH 連線 Linux 伺服器，在手機上查看狀態、使用終端機和管理 Docker 容器。",
  "hero_caption": "伺服器位置與即時狀態卡片。",
  "hero_kicker": "Android 14+",
  "hero_price": "一次買斷",
  "hero_price_note": "包含後續更新，無訂閱、廣告或應用程式內購",
  "hero_title": "手機上的 SSH 與伺服器監控",
  "inside_title": "使用 Meows",
  "language_auto": "跟隨瀏覽器",
  "language_label": "語言",
  "lens_body": "點選終端機或 Docker 日誌中已辨識的 IP、網域、URL 或權限字串，Lens 會列出對應的查詢與操作，不必重新複製輸入。",
  "lens_label": "Shell · Lens",
  "lens_note": "查詢與開啟網頁由你選擇，Lens 不會自動執行命令。",
  "lens_stack_aria": "Meows 工具頁和 Lens",
  "lens_title": "查詢終端機裡的位址",
  "maker_p1": "只用自己的伺服器測試，很難發現其他 Linux 環境中的問題。LowEndTalk 的朋友分享系統資訊並提供測試環境，協助我修正指標收集和歷史圖表。",
  "maker_p2": "經本人同意，部分參與者的暱稱收錄在 Meows 的致謝頁。",
  "maker_title": "感謝參與測試的朋友",
  "meta_description": "Meows 是原生 Android SSH 與 Linux 伺服器監控 App，可使用終端機、管理 Docker 容器和 SSH 隧道，伺服器端不必安裝監控程式。",
  "meta_title": "Meows",
  "monitor_alerts": "告警依伺服器設定門檻，也能啟用斷線與恢復通知。多項同時超標時，會合併為一則通知。",
  "monitor_body": "每台伺服器有獨立的狀態卡片，可查看 CPU、記憶體、磁碟、網路和 TCP 資料。切換至圖表後，可以查看近期歷史，以及目前的程序、掛載點或網卡明細。",
  "monitor_caption": "CPU 歷史曲線，下方為目前的程序明細。",
  "monitor_label": "監控",
  "monitor_title": "即時狀態與歷史記錄",
  "more_body": "SSH 帳號有 Docker 權限時，可查看容器狀態和日誌、啟動或停止容器。SSH 隧道支援本地和遠端轉發，也能經由跳板機連線。",
  "more_label": "其他工具",
  "more_title": "Docker、隧道與工具",
  "more_tools": "網路查詢、常用換算工具以及 Linux 和 C 手冊放在設定頁，不連線伺服器也能使用。",
  "nav_docs": "使用說明",
  "nav_inside": "功能",
  "nav_label": "主導覽",
  "nav_questions": "常見問題",
  "nav_why": "由來",
  "privacy_a1": "SSH 密碼和私鑰在裝置上加密儲存，並透過 Android Keystore 保護。",
  "privacy_a2": "監控歷史儲存在裝置上，不會上傳至 Meows 或其他第三方。",
  "privacy_a3": "手機透過 SSH 連線至你設定的伺服器，可經由跳板機。Meows 不提供中繼服務。",
  "privacy_a4": "備份在裝置端加密後，存入你自己的 Google Drive 隱藏應用程式資料夾，不包含監控歷史。",
  "privacy_body": "DNS、WHOIS 和 TLS 查詢會在你使用時連線至網路。本機 IP 資料庫查詢在裝置上完成。",
  "privacy_link": "查看隱私權政策 →",
  "privacy_q1": "SSH 認證資料",
  "privacy_q2": "監控資料",
  "privacy_q3": "連線路徑",
  "privacy_q4": "可選備份",
  "privacy_title": "認證資料與監控記錄",
  "q1": "伺服器上需要安裝什麼？",
  "q2": "可以透過跳板機連線嗎？",
  "q3": "需要哪個 Android 版本？",
  "q4": "有 iOS 版嗎？",
  "sketch_community_title": "系統樣本轉為手寫測試記錄的手繪示意",
  "sketch_connection_desc": "手機上的終端機透過 SSH 連線連接至一台三層伺服器。",
  "sketch_connection_title": "透過 SSH 連線的手機與伺服器",
  "sketch_lens_title": "用放大鏡查看終端機輸出中數值的手繪示意",
  "sketch_monitor_title": "紙面歷史曲線的手繪示意",
  "sketch_operations_title": "SSH 容器管理與獨立網路工具的手繪示意",
  "sketch_privacy_title": "以文件抽屜與鑰匙表現認證資料保管的手繪示意",
  "skip": "跳到正文",
  "story_p1": "Meows 最初是為了在手機上查看我自己的伺服器。即使只想確認 CPU 負載或磁碟空間，也得逐台透過 SSH 登入。",
  "story_p2": "我不想為此替這些小型伺服器多裝一套監控程式。Meows 沿用既有的 SSH 連線，將 Linux 系統資訊整理成卡片和圖表。",
  "story_title": "Meows 的由來",
  "tool_index_intro": "工具列表",
  "tool_jump": "跳板機",
  "tool_manuals": "Linux / C 手冊",
  "tool_permissions": "權限計算",
  "tool_regex_time": "正規表示式 / 時間戳",
  "tool_subnet_cron": "子網路 / Cron",
  "tool_terminal": "SSH 終端機",
  "tool_tunnels": "SSH 隧道"
});

const JA = Object.freeze({
  "a1": "追加の監視ソフトは不要です。既存の SSH サービスを使い、必要なシステム情報を読み取れるアカウントで接続します。",
  "a2": "はい。踏み台ホストから対象サーバーにアクセスできれば、監視、ターミナル、SSH トンネルに利用できます。",
  "a3": "Android 14 以降です。",
  "a4": "現在、iOS 版はありません。",
  "brand_home": "Meows ホーム",
  "connection_auth_label": "認証",
  "connection_auth_value": "パスワードまたは秘密鍵",
  "connection_middle_label": "Meows のサービス",
  "connection_middle_value": "中継・解析バックエンドなし",
  "connection_path_label": "接続",
  "connection_path_value": "Android 端末 → SSH → サーバー、踏み台経由も可能",
  "connection_server_label": "サーバー側",
  "connection_server_value": "既存の SSH サービスを使用。監視ソフトや監視用の追加ポートは不要",
  "examples_aria": "コマンド例",
  "fact_languages_label": "インターフェース",
  "fact_languages_value": "英語 / 簡体字 / 繁体字 / 日本語 / 韓国語",
  "fact_permission_label": "実行時権限",
  "fact_permission_value": "通知（任意）",
  "fact_server_label": "サーバー側",
  "fact_server_value": "監視ソフトの追加は不要",
  "faq_title": "使い始める前に",
  "footer_docs": "マニュアル",
  "footer_note": "Li Bainan が個人で開発・保守しています。",
  "footer_privacy": "プライバシーポリシー",
  "footer_source": "GitHub でウェブサイトのソースを見る",
  "footer_terms": "利用規約",
  "hero_body": "SSH で Linux サーバーに接続し、スマートフォンで状態を確認したり、ターミナルや Docker を操作したりできます。",
  "hero_caption": "サーバーの位置と現在の状態を表示するカード。",
  "hero_kicker": "Android 14+",
  "hero_price": "買い切り",
  "hero_price_note": "更新を含む買い切り。サブスク、広告、アプリ内課金なし",
  "hero_title": "Android で SSH とサーバー監視",
  "inside_title": "Meows の使い方",
  "language_auto": "ブラウザーに合わせる",
  "language_label": "言語",
  "lens_body": "ターミナルや Docker ログで認識された IP、ドメイン、URL、権限文字列をタップすると、Lens がその値に使える検索や操作を表示します。値をコピーして入力し直す必要はありません。",
  "lens_label": "Shell · Lens",
  "lens_note": "検索やウェブページを開く操作は自分で選びます。Lens がコマンドを自動実行することはありません。",
  "lens_stack_aria": "Meows のツールと Lens",
  "lens_title": "ターミナルの出力からアドレスを調べる",
  "maker_p1": "手元のサーバーだけで試していると、別の Linux 環境で起きる問題を見落とします。LowEndTalk の方々がシステム情報やテスト環境を提供してくださり、指標の収集と履歴グラフを修正できました。",
  "maker_p2": "掲載の許可をいただいた参加者の一部を、Meows の謝辞ページで紹介しています。",
  "maker_title": "テストに協力してくださった方々へ",
  "meta_description": "Meows は Android 用のネイティブ SSH・Linux サーバー監視アプリです。ターミナル、Docker、SSH トンネルを操作でき、サーバーに監視ソフトを追加する必要はありません。",
  "meta_title": "Meows",
  "monitor_alerts": "サーバーごとにアラートのしきい値を設定し、切断・復旧通知も選べます。複数の項目が超過した場合は一つの通知にまとめます。",
  "monitor_body": "サーバーごとのカードで CPU、メモリ、ディスク、ネットワーク、TCP の状態を確認できます。グラフに切り替えると、最近の履歴と現在のプロセス、マウント、ネットワークインターフェースの詳細を表示します。",
  "monitor_caption": "CPU の履歴グラフと、その下に現在のプロセス一覧。",
  "monitor_label": "監視",
  "monitor_title": "現在の状態と最近の履歴",
  "more_body": "SSH アカウントで Docker を操作できるサーバーでは、コンテナの状態やログを確認し、起動・停止も行えます。SSH トンネルはローカル・リモート転送に対応し、踏み台ホスト経由でも接続できます。",
  "more_label": "その他のツール",
  "more_title": "Docker、トンネル、その他のツール",
  "more_tools": "ネットワークの検索、各種変換ツール、Linux と C のマニュアルは設定画面にあります。サーバーに接続せずに使えます。",
  "nav_docs": "マニュアル",
  "nav_inside": "機能",
  "nav_label": "メインナビゲーション",
  "nav_questions": "よくある質問",
  "nav_why": "開発のきっかけ",
  "privacy_a1": "SSH パスワードと秘密鍵は端末上に暗号化して保存し、Android Keystore を利用して保護します。",
  "privacy_a2": "監視履歴は端末内に保存し、Meows や第三者には送信しません。",
  "privacy_a3": "スマートフォンから設定したサーバーへ SSH で接続します。踏み台経由も可能で、Meows の中継サービスはありません。",
  "privacy_a4": "任意のバックアップは端末上で暗号化し、自分の Google Drive アカウントの非表示アプリデータフォルダに保存します。監視履歴は含みません。",
  "privacy_body": "DNS、WHOIS、TLS の検索は、使うときに通信します。ローカル IP データベースの検索は端末内で行います。",
  "privacy_link": "プライバシーポリシーを読む →",
  "privacy_q1": "SSH 認証情報",
  "privacy_q2": "監視データ",
  "privacy_q3": "接続経路",
  "privacy_q4": "任意のバックアップ",
  "privacy_title": "認証情報とデータ",
  "q1": "サーバーに何かインストールしますか？",
  "q2": "踏み台ホスト経由で接続できますか？",
  "q3": "どの Android バージョンが必要ですか？",
  "q4": "iOS 版はありますか？",
  "sketch_community_title": "システムのサンプルから手書きのテスト記録へつながる図",
  "sketch_connection_desc": "スマートフォンのターミナルと3段のサーバーを SSH の線でつないだ図。",
  "sketch_connection_title": "SSH で接続するスマートフォンとサーバー",
  "sketch_lens_title": "ターミナル出力の値を虫眼鏡で調べる手描きの図",
  "sketch_monitor_title": "紙の上に描いた履歴グラフ",
  "sketch_operations_title": "SSH によるコンテナ管理と別のネットワークツールを表した手描きの図",
  "sketch_privacy_title": "書類の引き出しと鍵で認証情報の保管を表した手描きの図",
  "skip": "本文へ移動",
  "story_p1": "Meows は、自分のサーバーをスマートフォンで確認するために作り始めました。CPU 負荷やディスクの空きを見るだけでも、一台ずつ SSH でログインしていました。",
  "story_p2": "小さなサーバーに監視ソフトを追加したくありませんでした。Meows は既存の SSH 接続を使い、Linux のシステム情報をカードやグラフにまとめます。",
  "story_title": "自分のサーバーのために",
  "tool_index_intro": "ツール一覧",
  "tool_jump": "踏み台ホスト",
  "tool_manuals": "Linux / C マニュアル",
  "tool_permissions": "権限計算",
  "tool_regex_time": "正規表現 / タイムスタンプ",
  "tool_subnet_cron": "サブネット / Cron",
  "tool_terminal": "SSH ターミナル",
  "tool_tunnels": "SSH トンネル"
});

const KO = Object.freeze({
  "a1": "모니터링 프로그램을 추가로 설치할 필요는 없습니다. 기존 SSH 서비스를 사용하며, 필요한 시스템 정보를 읽을 수 있는 계정으로 연결합니다.",
  "a2": "네. 점프 호스트에서 대상 서버에 접근할 수 있다면 모니터링, 터미널, SSH 터널에 사용할 수 있습니다.",
  "a3": "Android 14 이상입니다.",
  "a4": "현재 iOS 버전은 없습니다.",
  "brand_home": "Meows 홈",
  "connection_auth_label": "인증",
  "connection_auth_value": "비밀번호 또는 개인 키",
  "connection_middle_label": "Meows 서비스",
  "connection_middle_value": "중계·분석 백엔드 없음",
  "connection_path_label": "연결",
  "connection_path_value": "Android 기기 → SSH → 서버, 점프 호스트 경유 가능",
  "connection_server_label": "서버 측",
  "connection_server_value": "기존 SSH 서비스 사용, 모니터링 프로그램이나 모니터링용 추가 포트 불필요",
  "examples_aria": "명령 예시",
  "fact_languages_label": "인터페이스",
  "fact_languages_value": "영어 / 중국어 간체 / 중국어 번체 / 일본어 / 한국어",
  "fact_permission_label": "런타임 권한",
  "fact_permission_value": "알림(선택 사항)",
  "fact_server_label": "서버 측",
  "fact_server_value": "별도 모니터링 프로그램 불필요",
  "faq_title": "시작하기 전에",
  "footer_docs": "사용 설명서",
  "footer_note": "Li Bainan이 독립적으로 개발하고 유지보수합니다.",
  "footer_privacy": "개인정보 처리방침",
  "footer_source": "GitHub에서 웹사이트 소스 보기",
  "footer_terms": "이용약관",
  "hero_body": "SSH로 Linux 서버에 연결해 휴대폰에서 상태를 확인하고 터미널과 Docker 컨테이너를 관리할 수 있습니다.",
  "hero_caption": "서버 위치와 실시간 상태 카드.",
  "hero_kicker": "Android 14+",
  "hero_price": "일회성 구매",
  "hero_price_note": "업데이트 포함. 구독, 광고, 인앱 구매 없음",
  "hero_title": "Android에서 SSH와 서버 모니터링",
  "inside_title": "Meows 사용하기",
  "language_auto": "브라우저 언어 따르기",
  "language_label": "언어",
  "lens_body": "터미널이나 Docker 로그에서 인식된 IP, 도메인, URL, 권한 문자열을 누르면 Lens가 해당 값에 사용할 수 있는 조회와 작업을 보여줍니다. 값을 다시 복사해 입력할 필요가 없습니다.",
  "lens_label": "Shell · Lens",
  "lens_note": "조회와 웹페이지 열기는 직접 선택합니다. Lens는 명령을 자동 실행하지 않습니다.",
  "lens_stack_aria": "Meows 도구와 Lens",
  "lens_title": "터미널 출력에서 주소 조회",
  "maker_p1": "제가 가진 서버만으로 테스트하면 다른 Linux 환경에서 발생하는 문제를 놓치기 쉽습니다. LowEndTalk의 참여자들이 시스템 정보와 테스트 환경을 제공해 주어 지표 수집과 기록 그래프를 수정할 수 있었습니다.",
  "maker_p2": "공개를 허락한 참여자 일부의 닉네임을 Meows 감사 페이지에 올렸습니다.",
  "maker_title": "테스트를 도와주신 분들께",
  "meta_description": "Meows는 Android 네이티브 SSH·Linux 서버 모니터링 앱입니다. 터미널, Docker, SSH 터널을 사용할 수 있으며 서버에 모니터링 프로그램을 추가로 설치할 필요가 없습니다.",
  "meta_title": "Meows",
  "monitor_alerts": "서버별로 알림 임계값을 설정하고 연결 끊김·복구 알림도 선택할 수 있습니다. 여러 항목이 초과되면 하나의 알림으로 합칩니다.",
  "monitor_body": "서버별 카드에서 CPU, 메모리, 디스크, 네트워크, TCP 상태를 확인합니다. 그래프로 전환하면 최근 기록과 현재 프로세스, 마운트, 네트워크 인터페이스 상세를 볼 수 있습니다.",
  "monitor_caption": "CPU 기록 그래프와 그 아래의 현재 프로세스 목록.",
  "monitor_label": "모니터링",
  "monitor_title": "실시간 상태와 최근 기록",
  "more_body": "SSH 계정에 Docker 접근 권한이 있으면 컨테이너 상태와 로그를 확인하고 시작하거나 중지할 수 있습니다. SSH 터널은 로컬·원격 포워딩을 지원하며 점프 호스트를 통해서도 연결할 수 있습니다.",
  "more_label": "기타 도구",
  "more_title": "Docker, 터널과 기타 도구",
  "more_tools": "네트워크 조회, 각종 변환 도구, Linux와 C 매뉴얼은 설정 화면에 있습니다. 서버에 연결하지 않아도 사용할 수 있습니다.",
  "nav_docs": "사용 설명서",
  "nav_inside": "기능",
  "nav_label": "주요 탐색",
  "nav_questions": "자주 묻는 질문",
  "nav_why": "개발 계기",
  "privacy_a1": "SSH 비밀번호와 개인 키는 기기에 암호화해 저장하며 Android Keystore를 통해 보호합니다.",
  "privacy_a2": "모니터링 기록은 기기에 저장하며 Meows나 다른 제3자에게 전송하지 않습니다.",
  "privacy_a3": "휴대폰에서 설정한 서버로 SSH 연결을 시작하며 점프 호스트를 경유할 수도 있습니다. Meows는 중계 서비스를 제공하지 않습니다.",
  "privacy_a4": "선택적 백업은 기기에서 암호화한 뒤 본인 Google Drive 계정의 숨겨진 앱 데이터 폴더에 저장합니다. 모니터링 기록은 포함하지 않습니다.",
  "privacy_body": "DNS, WHOIS, TLS 조회는 사용할 때 네트워크에 연결합니다. 로컬 IP 데이터베이스 조회는 기기 안에서 처리합니다.",
  "privacy_link": "개인정보 처리방침 읽기 →",
  "privacy_q1": "SSH 자격 증명",
  "privacy_q2": "모니터링 데이터",
  "privacy_q3": "연결 경로",
  "privacy_q4": "선택적 백업",
  "privacy_title": "자격 증명과 데이터",
  "q1": "서버에 무엇을 설치해야 하나요?",
  "q2": "점프 호스트를 통해 연결할 수 있나요?",
  "q3": "어떤 Android 버전이 필요한가요?",
  "q4": "iOS 버전이 있나요?",
  "sketch_community_title": "시스템 샘플에서 손으로 쓴 테스트 기록으로 이어지는 손그림",
  "sketch_connection_desc": "휴대폰의 터미널과 3단 서버를 SSH 선으로 연결한 그림.",
  "sketch_connection_title": "SSH로 연결된 휴대폰과 서버",
  "sketch_lens_title": "터미널 출력의 값을 돋보기로 살펴보는 손그림",
  "sketch_monitor_title": "종이에 그린 기록 그래프",
  "sketch_operations_title": "SSH 컨테이너 관리와 별도 네트워크 도구를 표현한 손그림",
  "sketch_privacy_title": "서류 서랍과 열쇠로 자격 증명 보관을 표현한 손그림",
  "skip": "본문으로 이동",
  "story_p1": "Meows는 휴대폰으로 제 서버를 확인하려고 만들기 시작했습니다. CPU 부하나 디스크 여유 공간만 보려 해도 서버마다 SSH로 로그인해야 했습니다.",
  "story_p2": "작은 서버에 모니터링 프로그램을 하나 더 설치하고 싶지 않았습니다. Meows는 기존 SSH 연결을 이용해 Linux 시스템 정보를 카드와 그래프로 정리합니다.",
  "story_title": "제 서버에서 시작했습니다",
  "tool_index_intro": "도구 목록",
  "tool_jump": "점프 호스트",
  "tool_manuals": "Linux / C 매뉴얼",
  "tool_permissions": "권한 계산",
  "tool_regex_time": "정규식 / 타임스탬프",
  "tool_subnet_cron": "서브넷 / Cron",
  "tool_terminal": "SSH 터미널",
  "tool_tunnels": "SSH 터널"
});

const I18N = Object.freeze({ en: EN, zhCN: ZH_CN, zhTW: ZH_TW, ja: JA, ko: KO });

// 所有页面语言均保留 Google Play 官方英文徽章
const PLAY_BADGE = Object.freeze({ src: "assets/playbadge/en.svg", alt: "Get it on Google Play" });

const SCREENSHOTS_LIGHT = Object.freeze({
  en: {
    overview: "assets/screenshots/en/overview.webp",
    charts: "assets/screenshots/en/charts.webp",
    tools: "assets/screenshots/en/tools.webp",
    lens: "assets/screenshots/en/lens.webp",
    thanks: "assets/screenshots/en/thanks.webp"
  },
  zhCN: {
    overview: "assets/screenshots/zhCN/overview.webp",
    charts: "assets/screenshots/zhCN/charts.webp",
    tools: "assets/screenshots/zhCN/tools.webp",
    lens: "assets/screenshots/zhCN/lens.webp",
    thanks: "assets/screenshots/zhCN/thanks.webp"
  },
  zhTW: {
    overview: "assets/screenshots/zhTW/overview.webp",
    charts: "assets/screenshots/zhTW/charts.webp",
    tools: "assets/screenshots/zhTW/tools.webp",
    lens: "assets/screenshots/zhTW/lens.webp",
    thanks: "assets/screenshots/zhTW/thanks.webp"
  },
  ja: {
    overview: "assets/screenshots/ja/overview.webp",
    charts: "assets/screenshots/ja/charts.webp",
    tools: "assets/screenshots/ja/tools.webp",
    lens: "assets/screenshots/ja/lens.webp",
    thanks: "assets/screenshots/ja/thanks.webp"
  },
  ko: {
    overview: "assets/screenshots/ko/overview.webp",
    charts: "assets/screenshots/ko/charts.webp",
    tools: "assets/screenshots/ko/tools.webp",
    lens: "assets/screenshots/ko/lens.webp",
    thanks: "assets/screenshots/ko/thanks.webp"
  }
});

const SCREENSHOTS_DARK = Object.freeze({
  en: {
    overview: "assets/screenshots-dark/en/overview.webp",
    charts: "assets/screenshots-dark/en/charts.webp",
    tools: "assets/screenshots-dark/en/tools.webp",
    lens: "assets/screenshots-dark/en/lens.webp",
    thanks: "assets/screenshots-dark/en/thanks.webp"
  },
  zhCN: {
    overview: "assets/screenshots-dark/zhCN/overview.webp",
    charts: "assets/screenshots-dark/zhCN/charts.webp",
    tools: "assets/screenshots-dark/zhCN/tools.webp",
    lens: "assets/screenshots-dark/zhCN/lens.webp",
    thanks: "assets/screenshots-dark/zhCN/thanks.webp"
  },
  zhTW: {
    overview: "assets/screenshots-dark/zhTW/overview.webp",
    charts: "assets/screenshots-dark/zhTW/charts.webp",
    tools: "assets/screenshots-dark/zhTW/tools.webp",
    lens: "assets/screenshots-dark/zhTW/lens.webp",
    thanks: "assets/screenshots-dark/zhTW/thanks.webp"
  },
  ja: {
    overview: "assets/screenshots-dark/ja/overview.webp",
    charts: "assets/screenshots-dark/ja/charts.webp",
    tools: "assets/screenshots-dark/ja/tools.webp",
    lens: "assets/screenshots-dark/ja/lens.webp",
    thanks: "assets/screenshots-dark/ja/thanks.webp"
  },
  ko: {
    overview: "assets/screenshots-dark/ko/overview.webp",
    charts: "assets/screenshots-dark/ko/charts.webp",
    tools: "assets/screenshots-dark/ko/tools.webp",
    lens: "assets/screenshots-dark/ko/lens.webp",
    thanks: "assets/screenshots-dark/ko/thanks.webp"
  }
});

const SCREENSHOT_ALTS = Object.freeze({
  en: {
    overview: "Meows overview with a world map and server card",
    charts: "Meows CPU history chart and process detail",
    tools: "Meows Settings page with Linux and network tools",
    lens: "Meows Lens actions for a selected domain",
    thanks: "Meows acknowledgements page with different paw avatars"
  },
  zhCN: {
    overview: "Meows 世界地图与服务器卡片",
    charts: "Meows CPU 历史曲线与进程明细",
    tools: "Meows 设置页中的 Linux 与网络工具",
    lens: "Meows Lens 的域名操作与查询结果",
    thanks: "Meows 致谢页与不同的猫爪头像"
  },
  zhTW: {
    overview: "Meows 世界地圖與伺服器卡片",
    charts: "Meows CPU 歷史曲線與程序明細",
    tools: "Meows 設定頁中的 Linux 與網路工具",
    lens: "Meows Lens 的網域操作與查詢結果",
    thanks: "Meows 致謝頁與不同的貓掌頭像"
  },
  ja: {
    overview: "Meows の世界地図とサーバーカード",
    charts: "Meows の CPU 履歴グラフとプロセス詳細",
    tools: "Meows 設定画面の Linux・ネットワークツール",
    lens: "Meows Lens のドメイン操作と結果",
    thanks: "Meows の謝辞ページと肉球アバター"
  },
  ko: {
    overview: "Meows 세계 지도와 서버 카드",
    charts: "Meows CPU 기록 그래프와 프로세스 상세",
    tools: "Meows 설정 화면의 Linux 및 네트워크 도구",
    lens: "Meows Lens 도메인 작업과 결과",
    thanks: "Meows 감사 페이지와 발바닥 아바타"
  }
});

const THEME_MEDIA = window.matchMedia("(prefers-color-scheme: dark)");

function updateScreenshots(languageKey) {
  const lightScreens = SCREENSHOTS_LIGHT[languageKey] || SCREENSHOTS_LIGHT.en;
  const darkScreens = SCREENSHOTS_DARK[languageKey] || {};
  const preferredScreens = THEME_MEDIA.matches ? darkScreens : lightScreens;
  const englishScreens = SCREENSHOTS_LIGHT.en;
  const localizedAlts = SCREENSHOT_ALTS[languageKey] || SCREENSHOT_ALTS.en;
  const englishAlts = SCREENSHOT_ALTS.en;

  document.querySelectorAll("[data-shot]").forEach((image) => {
    const slot = image.dataset.shot;
    const primarySource = preferredScreens[slot] || lightScreens[slot] || englishScreens[slot];
    const localizedLightFallback = lightScreens[slot] || englishScreens[slot];
    const englishLightFallback = englishScreens[slot];
    if (!primarySource) return;

    let attemptedLocalizedFallback = false;
    let attemptedEnglishFallback = false;
    image.onerror = () => {
      if (!attemptedLocalizedFallback && primarySource !== localizedLightFallback) {
        attemptedLocalizedFallback = true;
        image.src = localizedLightFallback;
        if (localizedAlts[slot]) image.alt = localizedAlts[slot];
        return;
      }
      if (!attemptedEnglishFallback && localizedLightFallback !== englishLightFallback) {
        attemptedEnglishFallback = true;
        image.src = englishLightFallback;
        image.alt = englishAlts[slot] || image.alt;
        return;
      }
      image.onerror = null;
    };

    image.removeAttribute("srcset");
    image.src = primarySource;
    image.dataset.activeLanguage = languageKey;
    image.dataset.activeTheme = THEME_MEDIA.matches ? "dark" : "light";
    if (localizedAlts[slot]) image.alt = localizedAlts[slot];
  });
}

function applyLanguage(key) {
  const dict = I18N[key] || I18N.en;
  document.title = dict.meta_title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = dict.meta_description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dict[element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-play-badge]").forEach((image) => {
    image.src = PLAY_BADGE.src;
    image.alt = PLAY_BADGE.alt;
  });

  updateScreenshots(key);

  return key;
}

window.addEventListener("DOMContentLoaded", () => {
  const language = window.MeowsLanguage.initialize({
    languages: Object.keys(I18N),
    apply: applyLanguage,
    labels: (key) => {
      const dict = I18N[key] || I18N.en;
      return {
        languageLabel: dict.language_label,
        automaticLabel: dict.language_auto
      };
    }
  });

  THEME_MEDIA.addEventListener("change", () => updateScreenshots(language.activeLanguage));
});
