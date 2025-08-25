#!/bin/bash

# Fix color classes in all TSX files
find src -name "*.tsx" -type f -exec sed -i '' \
  -e 's/text-primary-/text-indigo-/g' \
  -e 's/bg-primary-/bg-indigo-/g' \
  -e 's/border-primary-/border-indigo-/g' \
  -e 's/from-primary-/from-indigo-/g' \
  -e 's/to-primary-/to-indigo-/g' \
  -e 's/via-primary-/via-indigo-/g' \
  -e 's/hover:bg-primary-/hover:bg-indigo-/g' \
  -e 's/hover:text-primary-/hover:text-indigo-/g' \
  -e 's/hover:border-primary-/hover:border-indigo-/g' \
  -e 's/focus:ring-primary-/focus:ring-indigo-/g' \
  -e 's/shadow-primary-/shadow-indigo-/g' \
  -e 's/text-accent-/text-cyan-/g' \
  -e 's/bg-accent-/bg-cyan-/g' \
  -e 's/border-accent-/border-cyan-/g' \
  -e 's/from-accent-/from-cyan-/g' \
  -e 's/to-accent-/to-cyan-/g' \
  -e 's/via-accent-/via-cyan-/g' \
  -e 's/hover:bg-accent-/hover:bg-cyan-/g' \
  -e 's/hover:text-accent-/hover:text-cyan-/g' \
  -e 's/hover:border-accent-/hover:border-cyan-/g' \
  -e 's/focus:ring-accent-/focus:ring-cyan-/g' \
  -e 's/shadow-accent-/shadow-cyan-/g' \
  -e 's/text-creative-/text-amber-/g' \
  -e 's/bg-creative-/bg-amber-/g' \
  -e 's/border-creative-/border-amber-/g' \
  -e 's/from-creative-/from-amber-/g' \
  -e 's/to-creative-/to-amber-/g' \
  -e 's/via-creative-/via-amber-/g' \
  -e 's/hover:bg-creative-/hover:bg-amber-/g' \
  -e 's/hover:text-creative-/hover:text-amber-/g' \
  -e 's/hover:border-creative-/hover:border-amber-/g' \
  -e 's/focus:ring-creative-/focus:ring-amber-/g' \
  -e 's/shadow-creative-/shadow-amber-/g' \
  {} \;

echo "Color classes have been fixed!"