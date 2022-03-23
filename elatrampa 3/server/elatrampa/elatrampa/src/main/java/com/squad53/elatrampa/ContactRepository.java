package com.squad53.elatrampa;

import com.squad53.elatrampa.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{
}
