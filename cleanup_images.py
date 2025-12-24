import os
import urllib.parse

# ================= CONFIGURATION =================
# Set this to False to actually delete files.
# Keep it as True to just SEE what will be deleted first.
DRY_RUN = False

# The root directory to clean up (relative to this script)
# We are targeting ONLY this specific folder.
TARGET_DIR = os.path.join("public", "assets", "Store Images")

# ================= THE WHITELIST =================
# These are the files you want to KEEP.
# (Extracted from the code you pasted)
raw_kept_paths = [
    "/assets/Store Images/store images/SKURUP-1024x768.jpeg",
    "/assets/Store Images/Stora Herrestad 22-5/P1130130.JPG",
    "/assets/Store Images/store images/Arentorp-1024x768.jpg",
    "/assets/Store Images/Högsby/P1130278.JPG",
    "/assets/Store Images/Högsby/P1130274.JPG",
    "/assets/Store Images/Hånger 21-5/P1120966.JPG",
    "/assets/Store Images/Hånger 21-5/P1130002.JPG",
    "/assets/Store Images/Furulund 22-5/Furulund/P1130074.JPG",
    "/assets/Store Images/Hånger 21-5/P1130009.JPG",
    "/assets/Store Images/Forsvik (21-6)/P1130386.JPG",
    "/assets/Store Images/Alafors 20-3/image00167.jpeg",
    "/assets/Store Images/Västra Bodarna 29-8/IMG_1554.JPG",
    "/assets/Store Images/store images/SVINNINGE-1024x997.jpeg",
    "/assets/Store Images/store images/UCKLUM.jpg",
    "/assets/Store Images/Hånger 21-5/P1120964.JPG",
    "/assets/Store Images/store images/24sjuMellosa.jpg",
    "/assets/Store Images/Hånger 21-5/P1120970.JPG",
    "/assets/Store Images/Högsby/P1130262.JPG",
    "/assets/Store Images/Saxnäs 21-8/IMG_1161.JPG",
    "/assets/Store Images/Alafors 20-3/image00128.jpeg",
    "/assets/Store Images/store images/Stora-Herrestad.jpg",
    "/assets/Store Images/Stora Herrestad 22-5/P1130126.JPG"
]

def normalize_path(p):
    """
    Normalizes a path to system standard (handling slashes and decoding URL spaces).
    Removes leading slashes/backslashes to ensure relative path matching works.
    """
    # Decode URL characters (e.g., %20 becomes space)
    p = urllib.parse.unquote(p)
    # Replace forward slashes with system separator
    p = p.replace('/', os.sep)
    # Remove leading separators if present
    if p.startswith(os.sep):
        p = p[1:]
    return p.lower() # Case-insensitive comparison

def main():
    print("--- STARTING CLEANUP ---")
    
    if not os.path.exists(TARGET_DIR):
        print(f"Error: Target directory not found: {TARGET_DIR}")
        return

    # 1. Process the whitelist
    # We remove "public" from the start because the kept_paths usually start with /assets/
    # but our walker starts inside public/assets/Store Images.
    # We need to construct the full local path for comparison.
    kept_files_absolute = set()
    
    for p in raw_kept_paths:
        # Remove the leading '/assets/Store Images/' part specifically to match our target dir structure
        # Or better yet, construct the full relative path from project root 'public/...'
        
        # Strip leading slash
        if p.startswith('/'):
            p = p[1:]
            
        # The paths in your code are like "assets/Store Images/..."
        # In your file system, this corresponds to "public/assets/Store Images/..."
        full_local_path = os.path.join("public", normalize_path(p))
        kept_files_absolute.add(os.path.abspath(full_local_path).lower())

    print(f"Found {len(kept_files_absolute)} unique files to KEEP.")

    # 2. Walk through the directory
    deleted_count = 0
    kept_count = 0
    
    # Get absolute path of target dir for safer comparison
    abs_target_dir = os.path.abspath(TARGET_DIR)

    for root, dirs, files in os.walk(abs_target_dir):
        for file in files:
            file_path = os.path.join(root, file)
            abs_file_path = os.path.abspath(file_path)
            
            # Check if this file is in our kept set
            # We compare lower-case versions to avoid casing issues on Windows
            if abs_file_path.lower() in kept_files_absolute:
                kept_count += 1
                # print(f"KEEPING: {file}") # Uncomment if you want to see kept files
            else:
                deleted_count += 1
                if DRY_RUN:
                    print(f"[DRY RUN] Would delete: {file_path}")
                else:
                    try:
                        os.remove(file_path)
                        print(f"DELETED: {file_path}")
                    except Exception as e:
                        print(f"ERROR deleting {file_path}: {e}")

    # 3. Clean up empty directories
    if not DRY_RUN:
        print("\n--- Cleaning up empty directories ---")
        for root, dirs, files in os.walk(abs_target_dir, topdown=False):
            for name in dirs:
                dir_path = os.path.join(root, name)
                try:
                    # rmdir only works if directory is empty
                    os.rmdir(dir_path)
                    print(f"Removed empty folder: {dir_path}")
                except OSError:
                    # Directory not empty, skip
                    pass

    print("\n--- SUMMARY ---")
    print(f"Files Kept: {kept_count}")
    print(f"Files Marked for Deletion: {deleted_count}")
    
    if DRY_RUN:
        print("\n*** DRY RUN COMPLETE. NO FILES WERE DELETED. ***")
        print("To actually delete files, edit this script and set DRY_RUN = False")
    else:
        print("\n*** CLEANUP COMPLETE ***")

if __name__ == "__main__":
    main()