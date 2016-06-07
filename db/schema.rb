# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160607133325) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string   "first_name", null: false
    t.string   "last_name",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "books", force: :cascade do |t|
    t.string   "title",                                        null: false
    t.integer  "author_id",                                    null: false
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.string   "isbn"
    t.text     "description",        default: "N/A"
    t.string   "image_url",          default: "LINK TO IMAGE"
    t.string   "genre",              default: "genre"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "books", ["title"], name: "index_books_on_title", using: :btree

  create_table "readings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "book_id",    null: false
    t.text     "review"
    t.string   "status",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shelf_assignments", force: :cascade do |t|
    t.integer  "reading_id", null: false
    t.integer  "shelf_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shelves", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                                                                        null: false
    t.string   "password_digest",                                                                              null: false
    t.string   "session_token",                                                                                null: false
    t.datetime "created_at",                                                                                   null: false
    t.datetime "updated_at",                                                                                   null: false
    t.string   "username"
    t.string   "image_url",           default: "http://www.jadepixeldoll.com/images/ref_head/hdd04_blank.jpg"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
