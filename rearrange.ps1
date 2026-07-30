New-Item -ItemType Directory -Path "app\(main)" -Force

Move-Item -Path "app\dashboard" -Destination "app\(main)"
Move-Item -Path "app\freshers" -Destination "app\(main)"
Move-Item -Path "app\resources" -Destination "app\(main)"
Move-Item -Path "app\semester-1" -Destination "app\(main)"
Move-Item -Path "app\semester-2" -Destination "app\(main)"
Move-Item -Path "app\dashboard-admin" -Destination "app\(main)"
Move-Item -Path "app\profile" -Destination "app\(main)"
Move-Item -Path "app\clubs" -Destination "app\(main)"

Move-Item -Path "app\(main)\dashboard\layout.tsx" -Destination "app\(main)\layout.tsx"
