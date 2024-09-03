
---

## Yarn Commands for Package Management

1. **Install dependencies**:
   ```bash
   yarn install
   ```

   Yarn will execute the scripts defined in your `package.json` exactly as npm does. You don’t need to change the `scripts` section. The commands you use with Yarn are:

   - **To start the development server**:
     ```bash
     yarn dev
     ```

   - **To build the project for production**:
     ```bash
     yarn build
     ```

   - **To start the production server**:
     ```bash
     yarn start
     ```

   - **To run the linter**:
     ```bash
     yarn lint
     ```

2. **Add a dependency**:
   ```bash
   yarn add [package]
   ```
   Example:
   ```bash
   yarn add react
   ```

3. **Add a dev dependency**:
   ```bash
   yarn add [package] --dev
   ```
   Example:
   ```bash
   yarn add eslint --dev
   ```

4. **Remove a dependency**:
   ```bash
   yarn remove [package]
   ```
   Example:
   ```bash
   yarn remove react
   ```

5. **Update dependencies**:
   ```bash
   yarn upgrade
   ```

6. **Run a script**:
   ```bash
   yarn [script]
   ```
   Example:
   ```bash
   yarn dev
   ```

7. **Upgrade a specific package**:
   ```bash
   yarn upgrade [package]
   ```
   Example:
   ```bash
   yarn upgrade react
   ```

8. **Clean cache**:
   ```bash
   yarn cache clean
   ```

9. **Add a package with a specific version**:
   ```bash
   yarn add [package]@[version]
   ```
   Example:
   ```bash
   yarn add next@14.2.4
   ```

10. **Add a package as a dev dependency with a specific version**:
    ```bash
    yarn add [package]@[version] --dev
    ```
    Example:
    ```bash
    yarn add eslint@^8 --dev
    ```

11. **Run a script defined in `package.json`**:
    ```bash
    yarn run [script]
    ```
    Example:
    ```bash
    yarn run lint
    ```

---

