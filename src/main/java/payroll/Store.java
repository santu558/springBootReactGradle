/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package payroll;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Entity // <1>
public class Store {

	private @Id @GeneratedValue Long id; // <2>
	private String storeNumber;
	private String address;
	private String lastRunDate;

	private Store() {}

	public Store(String storeNumber, String address, String lastRunDate) {
		this.storeNumber = storeNumber;
		this.address = address;
		this.lastRunDate = lastRunDate;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Store store = (Store) o;
		return Objects.equals(id, store.id) &&
			Objects.equals(storeNumber, store.storeNumber) &&
			Objects.equals(address, store.address) &&
			Objects.equals(lastRunDate, store.lastRunDate);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, storeNumber, address, lastRunDate);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStoreNumber() {
		return storeNumber;
	}

	public void setStoreNumber(String storeNumber) {
		this.storeNumber = storeNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLastRunDate() {
		return lastRunDate;
	}

	public void setLastRunDate(String lastRunDate) {
		this.lastRunDate = lastRunDate;
	}

	@Override
	public String toString() {
		return "Store{" +
			"id=" + id +
			", storeNumber='" + storeNumber + '\'' +
			", inStoreDate='" + address + '\'' +
			", markDownDate='" + lastRunDate + '\'' +
			'}';
	}
}
// end::code[]
