# json.id @users.id
# json.username @users.username.capitalize
# json.image_url asset_path(@users.avatar.url)

json.array! @users do |user|
  json.id user.id
  json.username user.username.capitalize
  json.image_url asset_path(user.avatar.url)
end
