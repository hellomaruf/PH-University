import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    (this.modelQuery = modelQuery), (this.query = query);
  }

  // Method for search------------>
  search(searchableField: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableField.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }

  // Method for filtering------------->
  filter() {
    const queryObj = { ...this.query };
    const excludingImportant = ["searchTerm"];
    excludingImportant.forEach((key) => delete queryObj[key]);
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  // Method for sort----------------->
  sort() {
    const sort = this?.query?.sort || "-createAt";
    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }

  // Method for pagination------------>
  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    console.log("querybulder", page, limit);

    const skip = (page - 1) * limit;
    console.log(skip);
    
    this.modelQuery = this.modelQuery.limit(limit).skip(skip);
    return this;
  }
}

export default QueryBuilder;
